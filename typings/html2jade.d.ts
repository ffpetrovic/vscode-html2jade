declare module "html2jade" {
	function convertHtml(html: string, options?: Object, callback?: (err: any, jade: string) => void): void;
}
