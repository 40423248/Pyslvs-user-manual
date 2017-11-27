var tipuesearch = {"pages":[{"title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","tags":"misc","url":"./pages/about/"},{"title":"2017CD第十八週","text":"","tags":"Course","url":"./2017springCD-Week18.html"},{"title":"2017CD第十七週","text":"","tags":"Course","url":"./2017springCD-Week17.html"},{"title":"2017CD第十六週","text":"","tags":"Course","url":"./2017springCD-Week16.html"},{"title":"2017CD第十五週-2","text":"","tags":"Course","url":"./2017springCD-Week15-2.html"},{"title":"2017CD第十五週","text":"","tags":"Course","url":"./2017springCD-Week15.html"},{"title":"2017CD第十四週","text":"","tags":"Course","url":"./2017springCD-Week14.html"},{"title":"2017CD第十三週","text":"","tags":"Course","url":"./2017springCD-Week13.html"},{"title":"2017CD第十二週","text":"","tags":"Course","url":"./2017springCD-Week12.html"},{"title":"2017CD第十一週","text":"","tags":"Course","url":"./2017springCD-Week11.html"},{"title":"2017CD第十週","text":"","tags":"Course","url":"./2017springCD-Week10.html"},{"title":"2017CD第九週","text":"","tags":"Course","url":"./2017springCD-Week9.html"},{"title":"2017CD第八週","text":"","tags":"Course","url":"./2017springCD-Week8.html"},{"title":"2017CD第七週","text":"","tags":"Course","url":"./2017springCD-Week7.html"},{"title":"2017CD第六週","text":"","tags":"Course","url":"./2017springCD-Week6.html"},{"title":"2017CD第五週","text":"","tags":"Course","url":"./2017springCD-Week5.html"},{"title":"2017CD第四週","text":"0.9dev版本的問題: 1.動作執行太快時程式會直接跳掉: 譬如說返回上一個動作的指令(CTRL+Z)按的太快的時候,如下: 2.不能作搖擺運動:","tags":"Course","url":"./2017springCD-Week4.html"},{"title":"2017CD第三週","text":"其他試作範例: 1.直線運動機構: 羅伯特機構(Robert Mechaniam): 當(point0+point1)=(point1+point2)=(point2+point3)=(point3+point4),以及(point0+point2)=(point1+point3)=(point2+point4)時,point2可以做出近似於直線運動的路徑,而增加長度的比值時,會有更準確的直線運動 Pyslvs 0.9-beta.1 test Robert Mechaniam from 40423248 on Vimeo . 牽桿機構(Drag-link Mechanism): 此連桿的最短桿為固定桿(point0+point3),曲柄(point0+point2),(point3+point4)可以做整圈的旋轉 Pyslvs 0.9-beta.1 test Drag-link Mechanism from 40423248 on Vimeo . Pyslvs 0.9-beta.1 test Parallel crank four-bar linkage from 40423248 on Vimeo . Double rocker mechanism Pyslvs 0.9-beta.1 test Double rocker mechanism from 40423248 on Vimeo .","tags":"Course","url":"./2017springCD-Week3.html"},{"title":"Pyslvs-user-manual-2","text":"使用說明: 這邊來說明Pyslvs基本的使用方式,先從基本的曲柄搖桿四連桿機構開始: 一開始可以先想好四連桿的長度,繪製時再做調整, 如:固定桿L1= 100 ,曲柄L2= 40, 連結桿L3= 70 , 搖桿L4= 80, 1.現在先來放點的位置,不用放的很準確,放點的指令快捷鍵為ALT+P 大約如下: 再來是調整位置和定尺寸,要調整某個點時在該點上以左鍵點兩下 如下圖: 點兩下會出現此視窗: 裡面的選項: 點的名稱:現在所選的點 點的顏色:可以更改顏色,做為區別 點的座標:定位用,可在X軸和Y軸輸入任意值 點的類型:可以是銷,滑塊(尚未開放),滑槽(尚未開放) 點和滑塊的角度:(尚未開放) 對應關係: 調整連桿間的連結關係,可以把三,四個桿件合併成一個桿件 2.做連桿: 點選一個點,再點選另外一個點(要按著CTRL),接著再按下L,就會形成一根連桿 如下圖: 接著把其他的連桿也都接起來,就如下圖: 再來是調整點的位置,調整完後,如下圖: 這邊還要做固定點,要固定某一點時,在該點上點右鍵,點選Fixed 固定後如下圖: 另一個點也是: 接著來到輸入(input)的部分: 完成後大致是這樣: Pyslvs 0.9-beta.1 test1 from 40423248 on Vimeo .","tags":"Course","url":"./2017springCD-Week2.html"},{"title":"Pyslvs-user-manual-1","text":"簡介及介面介紹: Pyslvs基本是由Python和slovespace所開發出來的運動模擬軟體 可以在此軟體中用點和直線的連結來做基本的連桿運動分析及位置紀錄 此版本為0.9dev,目前處於開發中的階段,有部分功能尚未開放,現在做的是基本測試 以下為0.9dev版本的介面說明: 這裡是一開始的介面 左上角的功能有(藍色方框處由左看來): 1.檔案 2.編輯 3.機構 4.選項 5.幫助 檔案中的內容: 1.開啟新的工作簿(尚未開放) 2.讀取工作簿(尚未開放) 3.開啟範例(尚未開放) 4.導入(PMKS) 5.儲存為(尚未開放) 6.另存為(尚未開放) 7.導入 8.全螢幕 9.離開 編輯中的內容: 1.復原(取消) 2.重作(再加入) 3.批量移動(尚未開放) 機構中的內容: 1.新的點(建立一個點,ALT+P) 2.新的連桿(建立一根連桿,ALT+L) 3.編輯此點(點的細節) 4.編輯此連桿(連桿的細節) 5.刪除此點 6.刪除此連桿 選項中的內容: 1.顯示GUI控制台 2.放大和縮小 3.顯示點標記 4.顯示點的維度(X.Y座標) 5.顯示路徑資料 6.顯示固定路徑樣式 7.Python腳本 8.性質 幫助中的內容: 1.前往Pyslvs.com 2.前往倉儲 3.前往MDE.tw 4.關於Pyslvs 5.關於Qt 下方的功能有: 1.縮放比例:用滑鼠按住藍色的長條體並左右拖曳 2.縮放和定位:按下此按鈕畫面就會回到正中間,縮放比例會變成適合此機構的比例 3.鎖點和解鎖:按下此按鈕畫面外圍會出現紫色方框,此時可以用滑鼠來直接來拖曳點的位置,不用輸入座標 4.錯誤提醒:當連桿在運動時出現死點旁邊就會出先警示標誌,如下圖: 左側邊的部分(藍框部分-1): 機構(包含點和連桿): 這邊可以看到點的細節,還有連桿的細節,以及點和連桿之間配合的關係 如下圖所示: 相機(綠框)與筆記本(藍框) 相機(綠框):繪製好一個機構時,點一下相機圖案可以直接複製截圖,可以貼到其他地方作保留 如下圖所示: 筆記本(藍框):可以在此輸入此機構的作者名字及對於此機構的描述 如下圖所示: 左側邊的部分(藍框部分-2): 輸入(點和連桿的配合):在這裡決定固定桿和驅動桿,並且做導入變數做運動模擬, 還有記錄運動軌跡的功能 條件順序: 藍色框:所有的點(活動及固定的) 綠色框:決定固定桿 棕色桿:決定驅動桿 變數(紫色框):上面的條件順序決定好後導入這裡,可以做順時針或逆時針的旋轉(自動或手動), 也可以捨棄此變數條件(垃圾桶圖示) 記錄區(棕色框):可以把模擬過的路徑資料記錄在這裡 左側邊的部分(藍框部分-3): 合成: 上圖紅框部分:數量和種類分析(尚未開放) 上圖綠框部分:維度分析(不知為何一使用程式就跳掉),(介面如下) 左側邊的部分(藍框部分-4): 歷史(歷程): 左側邊的部分(藍框部分-5): 設定: 1.線寬:可調整連桿的寬度 2.字型:可調整字體的大小 3.路徑寬度:可調整移動路徑的寬度 4.比例因子: 5.控制台:在GUI控制台裡面顯示運動中的錯誤資料,如下圖: 6.歷史:可調整取消和恢復的次數上下限,如下圖:","tags":"Course","url":"./2017springCD-Week1.html"}]};