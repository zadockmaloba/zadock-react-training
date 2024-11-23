const businessConfig =  {
    Contact: {
        tableName: "Contact",
        defaultSortOrder: "ContactId ASC",
        selectStatement: "SELECT * FROM vwContact Main",
        readOnlyColumns: ['ModifiedByUser'],
        clientBased: false,
        useView: false,
    },
    Lookup: {
        defaultSortOrder: "DisplayValue",
        selectStatement: "SELECT * FROM Lookup Main WHERE LookupTypeId = 1",
        clientBased: false,
        useView: false,
        standardTable: false
    },
    LookupType: {
        defaultSortOrder: "DisplayValue",
        selectStatement: "SELECT * FROM vwLookupState",
        clientBased: false,
        useView: false,
        standardTable: false
    },
}

export default businessConfig;
