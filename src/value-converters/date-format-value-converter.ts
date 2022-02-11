import moment from "moment";

/**
 * Formats timestamps or strings to localized date formats
 * Usage: ${dateProperty|dateFormat}
 * @author Mike Reiche <mike.reiche@t-systems.com>
 */
export class DateFormatValueConverter {
    private static _defaultFormat = "LLL";

    static setDefaultFormat(format:string) {
        this._defaultFormat = format;
    }

    static getDefaultFormat() {
        return this._defaultFormat;
    }

    toView(value, format:string = DateFormatValueConverter._defaultFormat): string {
        return DateFormatValueConverter.format(value, format);
    }

    static format(value: any, format: string = DateFormatValueConverter._defaultFormat): string {
        const moment = this.momentFromTimeValue(value);
        return moment.format(format);
    }

    static momentFromTimeValue(value) {
        return moment(value);
    }
}
