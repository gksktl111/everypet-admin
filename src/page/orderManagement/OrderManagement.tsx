import React from 'react';
import DataTableGrid from "../../component/DataTableGrid";
import styles from './OrderManagement.module.scss';
import SearchInput from "../../component/SearchInput";

// 테이블 컬럼 설정
const columns = [
    {key: 'id', label: '주문번호'},
    {key: 'orderDate', label: '주문날짜'},
    {key: 'customerName', label: '고객 이름'},
    {key: 'productName', label: '상품 이름'},
    {key: 'orderStatus', label: '주문 상태'},
    {key: 'shippingStatus', label: '배송 상태'},
    {key: 'orderAmount', label: '주문 금액'},
];

// mock 데이터 설정
const mockData = Array.from({length: 50}, (_, index) => ({
    id: `A12412${index + 1}`,
    orderDate: `2024-12-${String(index % 30 + 1).padStart(2, '0')} ${String(index % 24).padStart(2, '0')}:00`,
    customerName: `고객 ${index + 1}`,
    productName: `상품 ${String.fromCharCode(65 + (index % 5))}`,
    orderStatus: index % 3 === 0 ? '접수완료' : index % 3 === 1 ? '접수전' : '주문취소',
    shippingStatus: index % 3 === 0 ? '배송중' : '배송완료',
    orderAmount: `${(index + 1) * 1000} 원`,
}));

const OrderManagement = () => {
    const placeHolder = "고객 이름, 상품 이름 검색"
    // 추후에 api 개발시 연결
    const searchFn = (searchInput : string) => {
        console.log(searchInput);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>주문관리</span>
                <div className={styles.searchFilterContainer}>
                    <SearchInput placeHolder={placeHolder} searchFn={searchFn}/>

                    <div className={styles.filterItem}>
                        <span className={styles.label}>주문 상태</span>
                        <select className={styles.select}>
                            <option>접수전</option>
                            <option>접수완료</option>
                            <option>주문취소</option>
                        </select>
                    </div>
                    <div className={styles.filterItem}>
                        <span className={styles.label}>배송 상태</span>
                        <select className={styles.select}>
                            <option>배송중</option>
                            <option>배송완료</option>
                        </select>
                    </div>
                    <button className={styles.searchButton}>검색하기</button>
                </div>
            </div>
            <DataTableGrid
                columns={columns}
                columnCount={columns.length + 1}
                rowData={mockData}
            />
        </div>
    );
};

export default OrderManagement;
