export const amazon = JSON.parse(
  JSON.stringify({
    "condition-note": {
      definition:
        "Descriptive text explaining the actual condition of the item. Required if condition-type is not New",
      accepted_value: "A text string; 1,000 characters maximum in length.",
      example: "In original package",
      label: "condition-note (condition-note)",
    },
    "ASIN-hint": {
      definition:
        "Amazon's Standard Identifier or ASIN for the product that you are selling. You can get the ASIN from the product detail page on Amazon. This is to resolve ambiguity when the standard product-id matches to two or more products on Amazon.",
      accepted_value: "Amazon Standard Identifier also know as ASIN.",
      example: "B000ETQTFW",
      label: "ASIN-hint (ASIN-hint)",
    },
    title: {
      definition:
        "You are not expected to provide the product title. This field is automatically populated with the product title from Amazon's catalogue when you perform product lookup. Its purpose is to provide you feedback on the product your identifier will match to on Amazon's site.",
      accepted_value:
        "Product title that is automatically populated when you use product lookup. The value in this field will not be used to update the product title in Amazon's catalogue.",
      example: "Palm Zire Handheld",
      label: "title (title)",
    },
    "product-tax-code": {
      definition:
        "Amazon.in's standard code to identify the tax properties of a product. Use the Product Tax Code only if you are sure that you are tax-enabled in Seller Central and you have Amazon tax codes for all your products.",
      accepted_value:
        "Enter the product tax code supplied to you by Amazon.in.  If no entry is provided, there will not be any tax code applied.",
      example: "A_GEN_NOTAX",
      label: "product-tax-code (product-tax-code)",
    },
    "operation-type": {
      definition:
        'Specifies the type of operation (Update, Delete) to be done on the data provided. If left blank, the default behaviour is "Update." Use "Delete" when you wish to remove listing completely and permanently from the catalogue.',
      accepted_value:
        "Select one of the following options: Update,  or Delete.",
      example: "Update",
      label: "operation-type (operation-type)",
    },
    "sale-price": {
      definition:
        "The sale price at which the merchant offers the product for sale, expressed in British Pounds (GBP). The site will strikethrough the item's normal price and indicate that the item is on sale at the sale price.",
      accepted_value:
        "A number with up to 18 digits allowed to the left of the decimal point and 2 digits to the right of the decimal point. Please do not use commas or dollar signs.",
      example: "24.99",
      label: "sale-price (sale-price)",
    },
    "sale-start-date": {
      definition:
        "The date that the sale price will begin to override the item's normal price.",
      accepted_value: "A date in this format: yyyy-mm-dd.",
      example: "2004-01-22",
      label: "sale-start-date (sale-start-date)",
    },
    "sale-end-date": {
      definition:
        "The last date that the sale price will override the item's normal price; the item's normal price will be displayed afterwards.",
      accepted_value: "A date in this format: yyyy-mm-dd.",
      example: "2004-03-05",
      label: "sale-end-date (sale-end-date)",
    },
    "leadtime-to-ship": {
      definition:
        "Indicates the time, in days, between when you receive an order for an item and when you can ship the item.  The default leadtime-to-ship is one to two business days. Use this field if your leadtime-to-ship is greater than two business days.",
      accepted_value: "A positive integer.",
      example: "3, 5, or 10",
      label: "leadtime-to-ship (leadtime-to-ship)",
    },
    "launch-date": {
      definition:
        "Specify the Date for when this listing can become available on the site.",
      accepted_value: "A date in this format: yyyy-mm-dd.",
      example: "2008-04-15",
      label: "launch-date (launch-date)",
    },
    "is-giftwrap-available": {
      definition:
        "Is gift messaging supported for this particular product?  If left blank, defaults to 'false'.",
      accepted_value: "Select: true or false",
      example: "true",
      label: "is-giftwrap-available (is-giftwrap-available)",
    },
    "is-gift-message-available": {
      definition:
        "Is gift messaging supported for this particular product?  If left blank, defaults to 'false'.",
      accepted_value: "Select: true or false",
      example: "true",
      label: "is-gift-message-available (is-gift-message-available)",
    },
    "fulfillment-center-id": {
      definition:
        'This attribute needs to be used when the seller participates in the "Fulfillment by Amazon" program.\n\nSeller-fulfilled products: Do not enter fulfillment-center-id, as it is not applicable.\n\nAmazon-fulfilled products: For those sellers using Amazon fulfillment services, this designates which fulfillment network will be used. Specifying a value of "AMAZON_IN" will define an item as "Amazon-fulfilled". Resubmitting with a blank or ‘default’ value for the fulfillment-center-id, along with quantity, will switch the item back to Seller-fulfilled.',
      accepted_value:
        "Seller-fulfilled products: default\nAmazon-fulfilled products: AMAZON_IN\n",
      example: "AMAZON_IN",
      label: "fulfillment-center-id (fulfillment-center-id)",
    },
    maximum_retail_price: {
      definition:
        "This is the maximum retail price that is physically printed on pre-packaged products by manufacturer according to legal metrology act. This is the maximum price that seller can charge a customer.  This attribute is only applicable to IN marketplace.",
      accepted_value:
        "A number with up to 18 digits allowed to the left of the decimal point and 2 digits to the right of the decimal point. Please do not use commas or dollar signs.",
      example: "195",
      label: "maximum_retail_price (maximum_retail_price)",
    },
    batteries_required: {
      definition:
        "Please indicate whether batteries are required to  use the product.",
      accepted_value: "Select one of the following options:  true or false.",
      example: "Yes",
      label: "batteries_required (batteries_required)",
    },
    are_batteries_included: {
      definition:
        "Please indicate whether batteries are included with the product.",
      accepted_value: "Select one of the following options:  true or false.",
      example: "Yes",
      label: "are_batteries_included (are_batteries_included)",
    },
    battery_cell_composition: {
      definition: "Specify the cell composition of battery in the product.",
      accepted_value: "What type or composition is the battery?",
      example: "lithium_ion",
      label: "battery_cell_composition (battery_cell_composition)",
    },
    battery_type: {
      definition:
        "Please refer to the Valid Values worksheet.  Only use this when PowerSource is 'battery'.",
      accepted_value: "Specify the type of battery in the product.",
      example: "battery_type_lithium_ion",
      label: "battery_type (battery_type)",
    },
    number_of_batteries: {
      definition: "Any integer greater than or equal to zero",
      accepted_value: "Any integer greater than or equal to zero",
      example: "3",
      label: "number_of_batteries (number_of_batteries)",
    },
    battery_weight: {
      definition: "Number up to 10 digits and 2 decimal points long.",
      accepted_value: "Number up to 10 digits and 2 decimal points long.",
      example: "150",
      label: "battery_weight (battery_weight)",
    },
    battery_weight_unit_of_measure: {
      definition: "Unit of measure used to describe the battery weight",
      accepted_value: "Unit of measure used to describe the battery weight",
      example: "gr or kg",
      label: "battery_weight_unit_of_measure (battery_weight_unit_of_measure)",
    },
    number_of_lithium_metal_cells: {
      definition:
        "Total number of Lithium cells (of type Metal) in the product,  where the cell isn't contained in an encased battery.",
      accepted_value: "A positive whole number.",
      example: "4",
      label: "number_of_lithium_metal_cells (number_of_lithium_metal_cells)",
    },
    number_of_lithium_ion_cells: {
      definition:
        "Total number of Lithium cells (of type Ion) in the product,  where the cell isn't contained in an encased battery.",
      accepted_value: "A positive whole number.",
      example: "4",
      label: "number_of_lithium_ion_cells (number_of_lithium_ion_cells)",
    },
    lithium_battery_packaging: {
      definition: "Describe how the lithium batteries are packaged.",
      accepted_value:
        "Select from one of the following:batteries_only,nbatteries_contained_in_equipment,nbatteries_packed_with_equipment",
      example: "batteries_contained_in_equipment",
      label: "lithium_battery_packaging (lithium_battery_packaging)",
      amazon_recommendation: {
        batteries_only: "batteries_only",
        nbatteries_contained_in_equipment: "nbatteries_contained_in_equipment",
        nbatteries_packed_with_equipment: "nbatteries_packed_with_equipment",
      },
    },
    lithium_battery_energy_content: {
      definition: "Watt hours of each battery (or cell) in unit",
      accepted_value: "number",
      example: "2",
      label: "lithium_battery_energy_content (lithium_battery_energy_content)",
    },
    lithium_battery_energy_content_unit_of_measure: {
      definition:
        "Indicate unit of measure if Lithium Battery Energy Content is populated",
      accepted_value:
        "Indicate unit of measure if Lithium Battery Energy Content is populated",
      example: "watt hours",
      label:
        "lithium_battery_energy_content_unit_of_measure (lithium_battery_energy_content_unit_of_measure)",
    },
    lithium_battery_weight: {
      definition:
        "This is the weight in gms of lithium contained in each metal cell or battery  or in the case of rechargeable batteries it is the equivalent lithium content expressed in grams, in each ion  cell or battery.",
      accepted_value: "A positive whole number.",
      example: "2",
      label: "lithium_battery_weight (lithium_battery_weight)",
    },
    lithium_battery_weight_unit_of_measure: {
      definition:
        "Select the unit of measure for Lithium Battery Weight. If Lithium Battery Weight  is used, you must also enter theLithium Battery Weight  Unit Of Measure.",
      accepted_value:
        "Select the unit of measure for Lithium Battery Weight. If Lithium Battery Weight  is used, you must also enter theLithium Battery Weight Unit Of Measure.",
      example: "grams",
      label:
        "lithium_battery_weight_unit_of_measure (lithium_battery_weight_unit_of_measure)",
    },
    supplier_declared_dg_hz_regulation: {
      definition:
        "Common products can be regulated as dangerous goods (e.g. nail polish, aerosols, cleaning products). For more information, refer to the help pages.",
      accepted_value:
        "Common products can be regulated as dangerous goods (e.g. nail polish, aerosols, cleaning products). For more information, refer to the help pages.",
      example: "",
      label:
        "supplier_declared_dg_hz_regulation (supplier_declared_dg_hz_regulation)",
    },
    hazmat_united_nations_regulatory_id: {
      definition:
        "Specify the four digit United Nations Transportation Number that identifies hazardous substances in the framework of international transportation. String with the first two characters 'UN' and the last four characters numbers between 0001- 3518",
      accepted_value:
        "Specify the four digit United Nations Transportation Number that identifies hazardous substances in the framework of international transportation",
      example: "UN3218",
      label:
        "hazmat_united_nations_regulatory_id (hazmat_united_nations_regulatory_id)",
    },
    safety_data_sheet_url: {
      definition:
        "Holds link to the externally hosted SDS (Safety Data Sheet), also known as MSDS (Material Safety Data Sheet), for an item. This is hosted by the manufacturer or distributor, so that it will always be up-to-date and correct.",
      accepted_value:
        "Holds link to the externally hosted SDS (Safety Data Sheet) for an item",
      example:
        "http://www.sigmaaldrich.com/MSDS/MSDS/DisplayMSDSPage.do?country=US&language=en&productNumber=84985&brand=ALDRICH&PageToGoToURL=http%3A%2F%2Fwww.sigmaaldrich.com%2Fcatalog%2Fproduct%2Faldrich%2F84985%3Flang%3Den",
      label: "safety_data_sheet_url (safety_data_sheet_url)",
    },
    item_weight: {
      definition:
        "The unit of measure used to describe the weight of the product, expressed in grams or kilograms. *** Required when ItemWeight is provided.",
      accepted_value:
        "A number with up to 10 digits to the left of the decimal point and up to 2 digits to the right of the decimal point. Please do not use commas.",
      example: "2.33, 20.75, 10000.00",
      label: "item_weight (item_weight)",
    },
    item_weight_unit_of_measure: {
      definition:
        "The unit of measure used to describe the weight of the product without shipping material.",
      accepted_value:
        "The unit of measure used to describe the weight of the product without shipping material.",
      example: "KG",
      label: "item_weight_unit_of_measure (item_weight_unit_of_measure)",
    },
    item_volume: {
      definition: "Indicates the volume capacity of a product.",
      accepted_value: "Describe the volume of the item",
      example: "12",
      label: "item_volume (item_volume)",
    },
    item_volume_unit_of_measure: {
      definition: "overall volume of an item",
      accepted_value: "overall volume of an item",
      example: "milliliters per second",
      label: "item_volume_unit_of_measure (item_volume_unit_of_measure)",
    },
    flash_point: {
      definition:
        "Enter the flashpoint temperature. Do not include modifier; unit is based on your response in the Temperature Units column of the template.",
      accepted_value:
        "A number with up to 10 digits allowed to the left of the decimal point and 2 digits to the right of the decimal point. Please do not use commas.",
      example: "180",
      label: "flash_point (flash_point)",
    },
    ghs_classification_class: {
      definition:
        "The class and category assigned by the Global Harmonized System (GHS) CLP classification system of chemicals.",
      accepted_value:
        "Global Harmonized System (GHS) CLP classification system.",
      example: "[{class:Explosive,subcategory:Liquid}]",
      label: "ghs_classification_class (ghs_classification_class)",
    },
  })
);
