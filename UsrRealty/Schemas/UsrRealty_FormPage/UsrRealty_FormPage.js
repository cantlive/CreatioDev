define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "40a29fdf-444f-44a5-aa92-09e1ce43bf14",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_kghor1p",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_kghor1p_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcAvgPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_l3isjs5_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateAverageRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "Button_kghor1p",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunWebServiceMaxPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_1spz5eo_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "tag-icon"
				},
				"parentName": "Button_kghor1p",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_v27f552_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "checkmark-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_zckt3it",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_zckt3it"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_xymedj4",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_xymedj4"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Comission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrComission_605yqww",
					"labelPosition": "auto",
					"control": "$PDS_UsrComission_605yqww",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_r8hi374",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_r8hi374",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_vacsk61",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_vacsk61",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RealtyComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_xydk157",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_xydk157",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_b5k2qsw",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_b5k2qsw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_ulxn5f7",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_ulxn5f7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RealtyNumber",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn8_ln2o743",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn8_ln2o743",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_i7zj3jg",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_i7zj3jg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrComissionPercent",
					"control": "$PDS_UsrOfferTypeUsrComissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3617r29",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3617r29_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ywiq6o1",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3617r29",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_nn79upm",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ywiq6o1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_8et7xo0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_8et7xo0_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_nn79upm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_oc0m08m",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_oc0m08m_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_hazvryiDS"
						}
					}
				},
				"parentName": "FlexContainer_nn79upm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_fzvlz4a",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_fzvlz4a_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_nn79upm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_04qsymk",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_04qsymk_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_fzvlz4a",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_k7pzlr7",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_k7pzlr7_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_fzvlz4a",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_jl8znvy",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_jl8znvy_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_jl8znvy_GridDetail_hazvryi",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_hazvryi"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_jl8znvy_SearchValue",
							"GridDetailSearchFilter_jl8znvy_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_nn79upm",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_1fuu1vt",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3617r29",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_hazvryi",
					"activeRow": "$GridDetail_hazvryi_ActiveRow",
					"selectionState": "$GridDetail_hazvryi_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_hazvryi_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_hazvryiDS_Id",
					"columns": [
						{
							"id": "e09c449c-dd89-3f29-493f-3f6c4707de34",
							"code": "GridDetail_hazvryiDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_hazvryiDS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 179
						},
						{
							"id": "e97749ba-5adf-8d53-5488-0506cf26f098",
							"code": "GridDetail_hazvryiDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_hazvryiDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 184
						},
						{
							"id": "4c3ad52d-8c6a-9a4e-4a20-c4c15958be18",
							"code": "GridDetail_hazvryiDS_UsrComment",
							"caption": "#ResourceString(GridDetail_hazvryiDS_UsrComment)#",
							"dataValueType": 28,
							"width": 137
						},
						{
							"id": "96a0609c-7c89-6a43-d24a-4bebf0b171b8",
							"code": "GridDetail_hazvryiDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_hazvryiDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 145
						},
						{
							"id": "3035a0aa-d69e-076c-9938-6e4dbfe63d19",
							"code": "GridDetail_hazvryiDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_hazvryiDS_UsrParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_1fuu1vt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_hazvryi_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hazvryiDS",
							"filters": "$GridDetail_hazvryi | crt.ToCollectionFilters : 'GridDetail_hazvryi' : $GridDetail_hazvryi_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hazvryi_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_hazvryi_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hazvryiDS",
							"filters": "$GridDetail_hazvryi | crt.ToCollectionFilters : 'GridDetail_hazvryi' : $GridDetail_hazvryi_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hazvryi_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_hazvryi_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_hazvryi_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_hazvryi | crt.ToCollectionFilters : 'GridDetail_hazvryi' : $GridDetail_hazvryi_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hazvryi_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_hazvryi_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hazvryiDS",
							"filters": "$GridDetail_hazvryi | crt.ToCollectionFilters : 'GridDetail_hazvryi' : $GridDetail_hazvryi_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hazvryi_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrArea_xymedj4": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_r8hi374": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrComment_xydk157": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrOfferType_vacsk61": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrManager_b5k2qsw": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrColumn8_ln2o743": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrPrice_zckt3it": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCountry_ulxn5f7": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_i7zj3jg": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrComission_605yqww": {
						"modelConfig": {
							"path": "PDS.UsrComission"
						}
					},
					"PDS_UsrOfferTypeUsrComissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrComissionPercent"
						}
					},
					"GridDetail_hazvryi": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_hazvryiDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_jl8znvy_GridDetail_hazvryi",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_hazvryiDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_hazvryiDS.UsrVisitDateTime"
									}
								},
								"GridDetail_hazvryiDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_hazvryiDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_hazvryiDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_hazvryiDS.UsrComment"
									}
								},
								"GridDetail_hazvryiDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_hazvryiDS.CreatedOn"
									}
								},
								"GridDetail_hazvryiDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_hazvryiDS.UsrParentRealty"
									}
								},
								"GridDetail_hazvryiDS_Id": {
									"modelConfig": {
										"path": "GridDetail_hazvryiDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_hazvryiDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrComissionPercent": {
									"path": "UsrOfferType.UsrComissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_hazvryiDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
              request: "usr.PushButtonRequest",
              handler: async(request, next) => 
                {
                  console.log("Button works");
                  Terrasoft.showInformation("Button was pressed");
                  var price = await request.$context.PDS_UsrPrice_zckt3it;
                  console.log("Price = " + price);
                  request.$context.PDS_UsrArea_xymedj4 = price * 0.2;

                  return next?.handle(request);
                }
            },
          {
              request: "crt.HandleViewModelAttributeChangeRequest",
              handler: async(request, next) => 
                {
                  if (request.attributeName === "PDS_UsrPrice_zckt3it" || request.attributeName === "PDS_UsrOfferTypeUsrComissionPercent")
                  {
                    var price = await request.$context.PDS_UsrPrice_zckt3it;
                    var percent = await request.$context.PDS_UsrOfferTypeUsrComissionPercent;
                    var comission = price * percent / 100;
                     request.$context.PDS_UsrComission_605yqww = comission;
                  }

                  return next?.handle(request);
                }
            },
          {
            request: "usr.RunWebServiceButtonRequest",
            handler: async (request, next) => {
                console.log("Run web service button works...");
            
                var typeObject = await request.$context.PDS_UsrType_r8hi374;
                var typeId = "";
                if (typeObject) {
                    typeId = typeObject.value;
                }
            
                var offerTypeObject = await request.$context.PDS_UsrOfferType_vacsk61;
                var offerTypeId = "";
                if (offerTypeObject) {
                    offerTypeId = offerTypeObject.value;
                }
            
                const httpClientService = new sdk.HttpClientService();
            
                const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
                const transferName = "rest";
                const serviceName = "RealtyService";
                const methodName = "GetMaxPriceByTypeId";
                const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
              
                var params = {
                    realtyTypeId: typeId,
                    realtyOfferTypeId: offerTypeId,
                    entityName: "UsrRealty"
                };
            
                const response = await httpClientService.post(endpoint, params);
            
                console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
            
                return next?.handle(request);
            }
          }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          "usr.DGValidator": {
              "validator": function (config) {
                  return function (control) {
                         let value = control.value;
                         let minValue = config.minValue;
                         let valueIsCorrect = value > minValue;
                         var result;
                         if (valueIsCorrect) {
                           result = null;
                         }
                         else {
                           result = {
                             "usr.DGValidator": {
                               message: config.message
                             }
                           };
                         }
                         return result;
                  };
              },
              "params": [
                  {
                      "name": "minValue"
                  },
                  {
                      "name": "message"
                  }
              ],
              "async": false
          }
        }/**SCHEMA_VALIDATORS*/
	};
});