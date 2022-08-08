To access the tests clone the repository, run the command ./node_modules/.bin/cypress open, select e2e and your browser type and then access the tests through the browser or your IDE.

4 tests for the award.co website

check_site simply checks the availability of the award.co website

check_links looks for all of the a tags with an href and sends a page request to the linked page, testing if all of the page links are available

check_titles checks a specified list of pages on the award.co site for a page title and meta description to improve SEO

image_visibility_check scans for img tags and checks to see if their width on the page is greater than 0, checking to see if it loaded on the page
