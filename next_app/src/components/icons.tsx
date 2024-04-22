import { Home, ClipboardList, LayoutGrid, Banknote, Users, Zap, Wallet, ChevronDown, Search, HelpCircle, MessageSquareMore, Download, ArrowUpDown, Info, type XIcon as LucideIcon, ChevronLeft, ChevronRight, Menu, FolderClosed, Box, Bug, Store, Settings, PlayCircle, Trash2, PlusIcon, PlusCircle, CheckCircle2Icon, XCircle, Loader, Copy, Check, RefreshCwIcon } from "lucide-react";
import ShareIcon from "@/assets/share.svg";
import ImportIcon from "@/assets/import.svg";
import InboxIcon from "@/assets/inbox.svg";

export type Icon = typeof LucideIcon;

export const Icons = {
  home: Home,
  tasks: ClipboardList,
  boxes: LayoutGrid,
  money: Banknote,
  users: Users,
  plugins: Zap,
  wallet: Wallet,
  arrowDown: ChevronDown,
  arrowLeft: ChevronLeft,
  arrowRight: ChevronRight,
  search: Search,
  helpCircle: HelpCircle,
  download: Download,
  sort: ArrowUpDown,
  chat: MessageSquareMore,
  info: Info,
  menu: Menu,
  projects: FolderClosed,
  deploy: Box,
  test: Bug,
  browser: Store,
  settings: Settings,
  executeCode: PlayCircle,
  delete: Trash2,
  add: PlusIcon,
  addCircle: PlusCircle,
  codeSuccess: CheckCircle2Icon,
  codeError: XCircle,
  codeRunning: Loader,
  copy: Copy,
  tick: Check,
  refresh: RefreshCwIcon,
  share: ShareIcon,
  import: ImportIcon,
  inbox: InboxIcon,
};