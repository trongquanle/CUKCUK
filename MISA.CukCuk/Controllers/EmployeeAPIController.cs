using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MISA.CukCuk.Models;

namespace MISA.CukCuk.Controllers
{
    [Route("api/employee")]
    [ApiController]
    public class EmployeeAPIController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public JsonResult GetEmployees()
        {
            var employees = new List<Employee>()
            {
                new Employee(){EmployeeCode="nv01", EmployeeName="Nguyễn Văn A", Email="nv01@gmail.com", SDT="21737518", CompanyName="MISA"},
                new Employee(){EmployeeCode="nv02", EmployeeName="Nguyễn Văn B", Email="nv02@gmail.com", SDT="21737518", CompanyName="MISA"},
                new Employee(){EmployeeCode="nv03", EmployeeName="Nguyễn Văn C", Email="nv03@gmail.com", SDT="21737518", CompanyName="MISA"},
                new Employee(){EmployeeCode="nv04", EmployeeName="Nguyễn Văn D", Email="nv04@gmail.com", SDT="21737518", CompanyName="MISA"},
                new Employee(){EmployeeCode="nv05", EmployeeName="Nguyễn Văn E", Email="nv05@gmail.com", SDT="21737518", CompanyName="MISA"},
            };
            return new JsonResult(employees);
        }
    }
}