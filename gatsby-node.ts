import {CreatePageArgs} from "gatsby";

export function onCreatePage({reporter, page}: CreatePageArgs) {
    reporter.info(page.path)
}
