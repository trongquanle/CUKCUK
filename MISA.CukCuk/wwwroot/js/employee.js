
$(document).ready(function () {
    let employeeJS = new EmployeeJS();
});
class EmployeeJS {
    constructor() {
        this.loadData();
        this.initEvents();
    }
    initEvents() {
        $("#btn-add").click(this.showDialogDetail.bind(this));
        $(".dialog-modal, #btn-cancel, .dialog-modal, .dialog-title-cancel").click(this.hideDialogDetail.bind(this));
        $("#btn-save").click(this.saveEmployee.bind(this));
        $("input[required]").blur(this.checkRequired);
        //$("#formEmployee").validate({
        //    rules: {

        //    },
        //    messages: {

        //    }
        //})
    }
    loadData() {
        $.ajax({
            url: '/api/employee',
            method: 'GET',
            dataType: 'json'
        }).done(res => {
            $.each(res, (i, item) => {
                let trHtml = $(`
                                    <tr>
                                        <td>${item.employeeCode}</td>
                                        <td>${item.employeeName}</td>
                                        <td>${item.email}</td>
                                        <td>${item.sdt}</td>
                                        <td>${item.companyName}</td>
                                    </tr>
                                `);
                $(".grid tbody").append(trHtml);
            });
        }).fail(err => {
            console.log(err.statusText);
        });
    }
    saveEmployee() {
        const inputRequireds = $("input[required]");
        let valid = true;
        $.each(inputRequireds, (i, input) => {
            $(input).trigger('blur');
            if ($(input).hasClass('required-error')) {
                valid = false;
            }
        });
        if (valid) {
            let data = {};
            $("#formEmployee").serializeArray().forEach(item => data[item.name] = item.value);
            console.log(data);
        }
    }
    checkRequired() {
        let id = $(this).attr('id');
        let value = this.value;
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-za-z\-0-9]+\.)+[a-za-z]{2,}))$/;
        if (!value) {
            $(this).addClass('required-error').attr('title', 'bạn phải nhập trường này');
        } else {
            $(this).removeClass('required-error').removeAttr('title');
        }
        if (id == "txtEmail" && !re.test((value))) {
                $(this).removeClass('required-error').addClass('required-error').attr('title', 'email không hợp lệ');
        }
    }
    hideDialogDetail() {
        $("input[required]").removeClass('required-error').removeAttr('title');
        $(".dialog-modal, .dialog").hide();
    }
    showDialogDetail() {
        $(".dialog-modal, .dialog").show();
        $("#txtEmployeeCode").focus();
    }
}