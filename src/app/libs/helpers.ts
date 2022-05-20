export abstract class Helpers {

    public static IfNullOrUndefined(value: any): any | null {
        let haveValue = !!value
        
        if (!haveValue) {
            return null;
        } else {
            return value;
        }
    }

    public static onlyNumbers(event: any) {
        let charCode = (event.which) ? event.which : event.keyCode
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault()
        }
    }

    public static onlyStrings(event: any) {
        if (!(/[a-z ]/i.test(String.fromCharCode(event.keyCode)))) {
            event.preventDefault()
        }
    }

   

}