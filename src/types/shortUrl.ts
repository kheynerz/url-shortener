export interface ShortUrl {
    id:             number;
    full_url:       string;
    title:          string;
    click_count:    number;
    created_at:     Date;
    updated_at:     Date;
    short_url_code: string;
    short_code:     string;
}

export interface ErrorResponse {
    errors:   string[];
    full_url: string[];
}


export type Url = Omit<ShortUrl, 'created_at' | 'updated_at' | 'short_url_code'>