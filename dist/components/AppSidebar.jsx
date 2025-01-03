"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSidebar = AppSidebar;
const sidebar_1 = require("@/components/ui/sidebar");
const collapsible_1 = require("@/components/ui/collapsible");
const lucide_react_1 = require("lucide-react");
const metadata_1 = require("@/metadata");
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const react_1 = require("react");
function AppSidebar() {
    const pathname = (0, navigation_1.usePathname)();
    // State to track expanded/collapsed state of each chapter
    const [expandedChapters, setExpandedChapters] = (0, react_1.useState)({});
    // Initialize state from localStorage
    (0, react_1.useEffect)(() => {
        const savedState = localStorage.getItem("expandedChapters");
        if (savedState) {
            setExpandedChapters(JSON.parse(savedState));
        }
    }, []);
    // Save state to localStorage whenever it changes
    (0, react_1.useEffect)(() => {
        localStorage.setItem("expandedChapters", JSON.stringify(expandedChapters));
    }, [expandedChapters]);
    // Group articles by chapter
    const groupedArticles = (0, react_1.useMemo)(() => {
        return Object.entries(metadata_1.articlesMetadata).reduce((acc, [key, article]) => {
            if (!acc[article.chapter]) {
                acc[article.chapter] = [];
            }
            acc[article.chapter].push(Object.assign(Object.assign({}, article), { path: key }));
            return acc;
        }, {});
    }, []);
    const toggleChapter = (chapter, open) => {
        setExpandedChapters((prev) => (Object.assign(Object.assign({}, prev), { [chapter]: open !== undefined ? open : !prev[chapter] })));
    };
    return (<sidebar_1.Sidebar>
      <sidebar_1.SidebarContent>
        {Object.entries(groupedArticles).map(([chapter, articles]) => {
            const mainChapter = articles.find((article) => article.title === chapter);
            const isExpanded = expandedChapters[chapter] || false;
            return (<collapsible_1.Collapsible key={chapter} className="group/collapsible" open={isExpanded} // Set initial state from `expandedChapters`
             onOpenChange={(open) => toggleChapter(chapter, open)} // Pass `open` to set state explicitly
            >
              <sidebar_1.SidebarGroup>
                <sidebar_1.SidebarGroupLabel asChild>
                  <collapsible_1.CollapsibleTrigger className="flex items-center w-full pl-0">
                    {mainChapter ? (<link_1.default href={mainChapter.isLive ? `/${mainChapter.path}` : "#"} className={`text-base p-2 w-full text-left ${mainChapter.isLive
                        ? "text-gray-800 font-bold hover:underline"
                        : "text-gray-400 cursor-not-allowed"} ${pathname === `/${mainChapter.path}` &&
                        mainChapter.isLive
                        ? "bg-gray-200 rounded-md"
                        : ""}`}>
                        {chapter}
                      </link_1.default>) : (<span className="text-gray-400">{chapter}</span>)}
                    <lucide_react_1.ChevronDown className="ml-2 transition-transform group-data-[state=open]/collapsible:rotate-180"/>
                  </collapsible_1.CollapsibleTrigger>
                </sidebar_1.SidebarGroupLabel>

                <collapsible_1.CollapsibleContent>
                  <sidebar_1.SidebarGroupContent>
                    <ul>
                      {articles
                    .filter((article) => article.title !== chapter)
                    .map((article) => (<li key={article.path} className="py-1 pl-2">
                            <link_1.default href={article.isLive ? `/${article.path}` : "#"} className={`block rounded-md px-2 py-1 ${article.isLive
                        ? "hover:bg-gray-200 text-gray-800"
                        : "text-gray-400 cursor-not-allowed"} ${pathname === `/${article.path}` &&
                        article.isLive
                        ? "bg-gray-200 font-semibold"
                        : ""}`}>
                              {article.title}
                            </link_1.default>
                          </li>))}
                    </ul>
                  </sidebar_1.SidebarGroupContent>
                </collapsible_1.CollapsibleContent>
              </sidebar_1.SidebarGroup>
            </collapsible_1.Collapsible>);
        })}
      </sidebar_1.SidebarContent>
    </sidebar_1.Sidebar>);
}
