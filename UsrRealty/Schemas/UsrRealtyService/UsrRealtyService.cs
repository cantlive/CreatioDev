namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using Terrasoft.Web.Common;
    using Terrasoft.Core.DB;
    using System.Web.SessionState;
    using System;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class RealtyService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetMaxPriceByTypeId(string realtyTypeId)
        {
            if (string.IsNullOrEmpty(realtyTypeId))
            {
                return -1;
            }

            Select selectRealtyOfferTypeId = new Select(UserConnection)
                .Column("Id")
                .From("UsrRealtyOfferType")
                .Where("Name").IsEqual(Column.Parameter("Sale")) as Select;

            Guid realtyOfferTypeId = selectRealtyOfferTypeId.ExecuteScalar<Guid>();

            Select select = new Select(UserConnection)
                .Column(Func.Max("UsrPrice"))
                .From("UsrRealty")
                .Where("UsrTypeId").IsEqual(Column.Parameter(new Guid(realtyTypeId)))
                .And("UsrOfferTypeId").IsEqual(Column.Parameter(realtyOfferTypeId)) as Select;

            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }
    }
}