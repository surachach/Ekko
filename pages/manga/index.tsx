import { Input, Button, Table, Tooltip, Affix, Image } from "antd";
import type { SorterResult } from "antd/es/table/interface";
import { useEffect, useState } from "react";
import type { ColumnsType, TableProps } from "antd/es/table";
import styled from "styled-components";
import { useRouter } from "next/router";
import moment from "Moment";

import { SearchOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  mal_id: number;
  title: string;
  synopsis: string;
  image_url: string;
  start_date: string;
  end_date: string;
  score: number;
  type: any;
}

function SearchManga({ posts }: any) {
  const [keyword, setKeyword] = useState<string>("");
  const [results, setResults] = useState<DataType[]>([]);
  const [keywordEnd, setKeywordEnd] = useState<string>("");
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchText, SetSearchText] = useState<string>("");
  let [filteredData] = useState();

  const handleChange: TableProps<DataType>["onChange"] | any = (
    pagination: TableProps<DataType>["onChange"],
    filters: TableProps<DataType>["onChange"],
    sorter: SorterResult<DataType>
  ) => {
    console.log("params", pagination, filters, sorter);
    setSortedInfo({ columnKey: sorter.columnKey, order: sorter.order });
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
  };

  const fetchSearch = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/manga?q=${keyword}`
    );
    const json = await response.json();
    setResults(await json.results);
  };

  const handleSearch = (e: any) => {
    SetSearchText(e.target.value);
    if (e.target.value === "") {
      return console.log("Array  is 0 fetch API ");
    }
  };

  const globalSearch = () => {
    console.log("filteredData ---->", filteredData);
    console.log(posts);
    // console.log("searchText ---->", searchText);
  };

  useEffect(() => {
    if (!results) {
      setResults(posts);
    }
  }, [posts, results]);

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "mal_id",
      key: "mal_id",
      align: "center",
      sorter: {
        compare: (a, b) => a.mal_id - b.mal_id,
        multiple: 1,
      },
      sortOrder: sortedInfo.columnKey === "mal_id" ? sortedInfo.order : null,
    },
    {
      title: "Image",
      dataIndex: "image_url",
      key: "image_url",
      align: "center",
      render: (value: string) => (
        <>
          <Image src={value} width={130} height={160} alt="Immm" />
        </>
      ),
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",

      sorter: (a, b) => {
        console.log(
          "a.title.localeCompare(b.title",
          a.title.localeCompare(b.title)
        );

        return a.title.localeCompare(b.title);
      },

      sortOrder: sortedInfo.columnKey === "title" ? sortedInfo.order : null,
    },
    {
      title: "Synopsis",
      dataIndex: "synopsis",
      key: "synopsis",
      align: "center",

      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="ค้นหา "
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
            ></Input>
            <span
              style={{ display: "flex", justifyContent: "end", width: "200px" }}
            >
              <Button
                onClick={() => {
                  confirm();
                }}
                style={{ backgroundColor: "blanchedalmond" }}
              >
                Scearch
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                style={{ backgroundColor: "salmon" }}
              >
                Reset
              </Button>
              {/* <Popconfirm placement="topRight"></Popconfirm> */}
            </span>
          </>
        );
      },

      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value: any, record: any) => {
        return record.title.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      align: "center",
      sortDirections: ["ascend", "descend"],
      sorter: {
        compare: (a, b) => a.score - b.score,
        multiple: 3,
      },
      sortOrder: sortedInfo.columnKey === "score" ? sortedInfo.order : null,
    },
    {
      title: "Period",
      key: "image_url",
      align: "center",

      render: (value: DataType) => {
        return (
          <div style={{ whiteSpace: "nowrap" }}>
            <p>
              Start date :
              {moment(value.start_date).add(543, "year").format("DD-MM-YYYY")}
            </p>
            <p>
              End date :
              {moment(value.end_date).add(543, "year").format("DD-MM-YYYY")}
            </p>
            {/* <p> End date : {dayjs(value.end_date).format("DD-MM-YYYY")}</p> */}
            {/* <p>{moment(value.start_date).format("DD MM YYYY HH:mm:ss")}</p> */}
            {/* <p>{moment().startOf("month").format("mm YYYY")}</p> */}
            {/* <p>{moment().endOf("month").format("DD MM YYYY")}</p> */}
          </div>
        );
      },
    },
  ];

  const data: DataType[] = results;

  const router = useRouter();
  return (
    <div>
      <CustomText>
        <h1>Manga Page</h1>
        {keywordEnd === "" ? (
          <>
            <Input
              placeholder="Serach Manga"
              style={{ width: "50%", borderRadius: "50px 50px" }}
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              onPressEnter={() => {
                fetchSearch();
                setKeywordEnd(keyword);
              }}
            />
            <CustomButton
              onClick={() => {
                fetchSearch();
                setKeywordEnd(keyword);
              }}
            >
              Search
            </CustomButton>
          </>
        ) : (
          <Affix
            offsetTop={20}
            style={{
              width: "100vw",

              padding: "30px",
            }}
          >
            <span>
              <Tooltip title="search">
                <Button
                  shape="circle"
                  icon={<SearchOutlined />}
                  size="middle"
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    fetchSearch();
                    setKeywordEnd(keyword);
                  }}
                ></Button>
              </Tooltip>

              <Input
                placeholder="Serach"
                style={{
                  width: "200px",
                  borderRadius: "50px 50px",
                  boxShadow: "2px 2px 14px 2px #8888",
                }}
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
                onPressEnter={() => {
                  fetchSearch();
                  setKeywordEnd(keyword);
                }}
              />
            </span>
          </Affix>
        )}
      </CustomText>

      {keywordEnd === "" ? (
        <div
          style={{ display: "flex", width: "100vw", justifyContent: "center" }}
        >
          <Image
            src="https://www.worldatlas.com/r/w960-q80/upload/89/75/f3/shutterstock-413397052.jpg"
            width={500}
            height={300}
            alt="Image"
            style={{ borderRadius: "8% 8%" }}
          />
        </div>
      ) : (
        <>
          <input
            placeholder="Enter Search Text"
            type="text"
            onChange={handleSearch}
            value={searchText}
          />
          <Button onClick={globalSearch} type="primary">
            Search
          </Button>
          <Table
            rowKey={posts.mal_id}
            columns={columns as any}
            dataSource={data}
            onChange={handleChange}
            pagination={{ position: ["topRight", "bottomRight"] }}
            style={{ padding: "30px" }}
            onRow={(record: { mal_id: number }) => {
              return {
                onClick: () => {
                  router.push(`/manga/${record.mal_id}`);
                },
              };
            }}
          />
        </>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.jikan.moe/v3/search/anime?q=&page=1&genre=1,10&order_by=start_date&sort=desc`
  );
  const json = await res.json();
  const posts = await json.results;
  console.log("getServerSideProps --->");
  return { props: { posts } };
}

const CustomText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-top: 150px;
`;

const CustomButton = styled(Button)`
  margin: 20px;
`;

export default SearchManga;
