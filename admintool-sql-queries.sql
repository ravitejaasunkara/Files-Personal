/* for first value in dropdown "products" */ 
/* TBL PRODUCTS DATA -> FIRST ONE IN SELECT MENU */
/*JOIN TBL_SALES_EVALUATION tse ON tp.SALES_EVAL_ID = tse.ID*/

SELECT tp.*,tb.CODE,tb.TEXT,ti.IMPRINT,tppub.DESCRIPTION as PUBLISHER,tsg.DESCRIPTION
FROM TBL_PRODUCTS tp 
JOIN TBL_BINDINGSTYLE tb ON tp.BINDINGSTYLE_ID = tb.ID
JOIN TBL_IMPRINTS ti ON tp.IMPRINT_ID = ti.ID
JOIN TBL_PUBLISHER tppub ON tp.PUBLISHER_ID = tppub.ID
JOIN TBL_SUBJECT_GROUP tsg ON tp.SUBJECT_GROUP_ID = tsg.ID
WHERE tp.ISBN = '9780203873700';
-------------------------------------------------------------------------------------------
/* for second value in dropdown is pending because parentcode,parent title could not found*/
 2nd part in dropdown 2nd value 
	/* CLASSIFICATIONS API */
	SELECT tc.*,tpc.PRODUCT_ID,tp.ISBN
	FROM TBL_CLASSIFICATION tc 
	JOIN TBL_PRODUCT_CLASSIFICATION tpc ON tc.ID = tpc.CLASSIFICATION_ID 
	JOIN TBL_PRODUCTS tp ON tpc.PRODUCT_ID = tp.ID 
	WHERE tp.ISBN = '9780203873700' ORDER BY tc.DATE_CREATED;
-----------------------------------------------------------------------------------------------
/* 3rd value in dropdown /DOWNLOADS/ could not figure out that one */
bacause DOwnloads does not have any relationships exist.
-----------------------------------------------------------------------------------------------
/* 4th value in dropdown */
1st part - IMPRINT&PUBLISHER
	SELECT DISTINCT ti.* FROM TBL_IMPRINTS ti 
	JOIN TBL_NEW_DISCOUNT_IMPRINT tndi ON ti.ID = tndi.IMPRINT_ID 
	JOIN TBL_PRODUCTS tp ON ti.ID = tp.IMPRINT_ID 
	WHERE tp.ISBN = '9780429063374';  

/* could not figure out second part -> APPLICATIONS */
--------------------------------------------------------------------------------------------------
/* 5th value in dropdown -> INVENTORY_STATUS */
1st part -> inventory status
	SELECT tpis.*,tdc.CODE,tdc.DESCRIPTION,tis.CODE,tis.DESCRIPTION,tp.ISBN
	FROM TBL_PRODUCT_INVENTORY_STATUS tpis 
	JOIN TBL_DISTRIBUTION_CENTER tdc ON tpis.DISTRIBUTION_CENTER_ID = tdc.ID 
	JOIN TBL_INVENTORY_STATUS tis ON tpis.INVENTORY_STATUS_ID = tis.ID 
	JOIN TBL_PRODUCTS tp ON tpis.PRODUCT_ID = tp.ID 
	WHERE tp.ISBN = '9780429063374';
2nd part -> vital source inventory not figured.
------------------------------------------------------------------------------------------------------
/* 6th value in dropdown -> ORIGINATORS */
SELECT tblo.*,tpo.ORDERING,tp.ISBN
FROM TBL_ORIGINATORS tblo
JOIN TBL_PRODUCT_ORIGINATORS tpo ON tblo.ID = tpo.ORIGINATOR_ID 
JOIN TBL_PRODUCTS tp ON tpo.PRODUCT_ID = tp.ID 
WHERE tp.ISBN = '9780429063374';

here role,description fields were missing will have to figure them out.
-----------------------------------------------------------------------------------------------------
/* 7th part in dropdown -> PRICING & DISCOUNTS */

1st part -> PRICING
SELECT tpp.*,tc.NAME,tc.ISO_NAME,tpt.CODE,tp.ISBN
FROM TBL_PRODUCT_PRICE tpp
JOIN TBL_CURRENCIES tc ON tpp.CURRENCY_ID = tc.ID 
JOIN TBL_PRICE_TYPE tpt ON tpp.PRICE_TYPE_ID = tpt.ID 
JOIN TBL_PRODUCTS tp ON tpp.PRODUCT_ID = tp.ID 
where tp.ISBN = '9781032243948';

2nd part -> DISCOUNTS
SELECT td.*,tdp.ISBN 
FROM TBL_DISCOUNTS td 
JOIN TBL_DISCOUNT_PRODUCTS tdp ON td.ID = tdp.DISCOUNT_ID 
WHERE tdp.ISBN = '9781859961896';
---------------------------------------------------------------------------------------------------------
