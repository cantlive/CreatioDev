namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("b06a7305-457b-4e8d-942c-e647d906b17c");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("372b0eed-2283-4fbe-a536-dd1b7e20ce79");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,193,110,219,48,12,189,231,43,8,163,7,27,8,132,246,186,110,5,150,32,27,10,20,219,208,184,187,20,59,40,50,227,106,144,37,67,148,211,101,67,254,125,148,148,180,113,218,97,125,39,135,122,124,124,143,161,149,29,82,47,21,66,141,222,75,114,235,32,230,206,174,117,59,120,25,180,179,147,63,19,96,12,164,109,11,203,45,5,236,46,143,42,199,93,93,231,236,191,222,60,138,133,13,58,104,164,55,80,196,98,131,54,48,51,81,239,83,121,155,106,55,154,29,88,244,229,82,61,96,39,191,176,125,248,0,197,29,249,91,148,38,108,139,234,71,234,233,135,149,209,10,148,145,68,144,159,94,81,129,119,48,147,132,175,189,36,149,156,253,72,207,109,216,176,110,16,54,78,55,240,213,46,229,134,99,148,110,245,19,85,0,66,219,160,159,66,214,155,225,154,51,37,213,143,190,37,192,234,73,237,89,55,98,197,22,196,147,214,65,4,171,203,17,43,139,130,79,89,56,115,153,11,85,230,143,185,13,42,221,73,3,189,215,42,238,39,55,137,207,24,234,109,143,205,220,153,161,179,223,165,25,240,253,158,122,85,198,29,126,139,252,226,100,176,94,67,153,133,174,224,226,252,128,106,196,25,7,138,64,113,77,115,105,21,26,108,216,65,240,3,238,255,206,99,80,240,241,12,248,6,73,182,88,99,215,27,25,162,99,139,143,112,227,148,52,250,183,92,25,92,38,94,185,207,113,71,232,249,72,45,239,156,47,84,220,34,185,193,43,38,57,207,42,211,23,83,34,158,79,36,223,86,49,133,226,197,0,18,105,41,215,84,59,55,211,109,254,85,84,162,118,123,3,213,127,51,176,247,92,16,159,156,239,100,40,79,178,241,216,11,113,62,59,59,221,114,68,120,240,238,49,69,95,252,82,216,199,112,135,246,19,246,110,50,254,218,77,118,127,1,156,122,240,228,202,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("10da0c5d-5849-e6c4-7a42-54d133cb894f"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("372b0eed-2283-4fbe-a536-dd1b7e20ce79"),
				CreatedInSchemaUId = new Guid("b06a7305-457b-4e8d-942c-e647d906b17c"),
				ModifiedInSchemaUId = new Guid("b06a7305-457b-4e8d-942c-e647d906b17c")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("b06a7305-457b-4e8d-942c-e647d906b17c"));
		}

		#endregion

	}

	#endregion

}

