var tipuesearch = {"pages":[{"title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","tags":"misc","url":"./pages/about/"},{"title":"2017CD第十八週","text":"","tags":"Course","url":"./2017springCD-Week18.html"},{"title":"2017CD第十七週","text":"","tags":"Course","url":"./2017springCD-Week17.html"},{"title":"2017CD第十六週","text":"","tags":"Course","url":"./2017springCD-Week16.html"},{"title":"2017CD第十五週-2","text":"","tags":"Course","url":"./2017springCD-Week15-2.html"},{"title":"2017CD第十五週","text":"","tags":"Course","url":"./2017springCD-Week15.html"},{"title":"2017CD第十四週","text":"","tags":"Course","url":"./2017springCD-Week14.html"},{"title":"2017CD第十三週","text":"","tags":"Course","url":"./2017springCD-Week13.html"},{"title":"2017CD第十二週","text":"","tags":"Course","url":"./2017springCD-Week12.html"},{"title":"2017CD第十一週","text":"","tags":"Course","url":"./2017springCD-Week11.html"},{"title":"2017CD第十週","text":"","tags":"Course","url":"./2017springCD-Week10.html"},{"title":"2017CD第九週","text":"","tags":"Course","url":"./2017springCD-Week9.html"},{"title":"2017CD第八週","text":"簡介及介面介紹3: 此版本為更新版Pyslvs 0.9-beta.3,新增了一些功能 1.檔案區:新增了兩個範例Ball Lifter(Double six bar linkage), Crank Slider 2.機構區:新增了Batch moving功能,按下時可對畫布上的點做任意移動 左側方機構部分:開放點的滑塊功能和滑槽功能,介面中有部分修改,如下圖: 打勾的小圖示按一下可選取所有點或連桿,如下圖:","tags":"Course","url":"./2017springCD-Week8.html"},{"title":"2017CD第七週","text":"補充0.9dev(Pyslvs 0.9-beta.1)左側邊的部分(藍框部分-3)的合成介面介紹: 在前面的部份有到說一使用程式就會直接跳出,是因為按了Process(處理)這個按鈕,這個功能是還沒有完成的,所以還不能用,在這邊對可以用的功能來試用: 藍色框中的內容(Path): 1.座標數目:顯示白框內目前有的座標數量 2.清除全部的座標:刪除白框內的所有座標 3.處理(轉換):此功能暫時無法使用,按了程式會跳掉 4.函數式導入座標:用此功能所提供的四個函數式來產生連續的座標路徑,可以任意設定變數值及範圍變化,介面如下圖: Formula: (1)f(x)=kx+c (2)f(x)=kx&#94;2+c (3)f(x)=k cos(x π/180)+c (4)f(x)=k sin(x π/180)+c 5.開啟csv文件檔:從外部開啟csv檔來導入座標 6.開啟excel文件檔:從外部開啟excel檔來導入座標 7.x座標和y座標的設定處:這邊可以任意設定x和y的座標點 8.加入座標:此按鈕可以把7.部分的座標加入到白框內 9.刪除座標:此按鈕可以在白框內選取的座標給移除 備註: 圖中以紅圈圍起來的兩個按鈕似乎功能不穩,點擊按鈕會讓程式跳掉 綠色框中的內容: 可以看到裡面有Driver和Follower這兩個選項,這兩個裡面有三個可調整的細節,上面兩個並排的是x和y的位置,下面的是調整左邊畫布區的抓取方框大小,如下圖: 紫色的Driver方框是用來抓取主動件的運動路徑,淺綠色的Follower方框是用來抓取從動件的運動路徑,範圍放的越大,轉換成運動圖的計算時間越長,相反的,範圍放的越小,計算時間越短 紅色框中的內容: 1.ZMQ generate: 2.Local Generate:以函數式產生的座標來生成另外的連桿運動圖,在程式內部執行,有座標時點擊按鈕會出現該視窗,如下圖: 橙色框中的內容: 1.白色框中出現的會是完成的動態圖 2.chart按鈕:此功能未開放,按了程式會跳出 3.delete按鈕:刪除產生的動態圖 4.merge按鈕:此功能未開放,按了程式會跳出 棕色框中的內容: 1.Four bar:產生的動態圖為四連桿 2.Eight bar:產生的動態圖為八連桿 3.Genetic Algorithm:此功能是基因演算法(遺傳演算法), 簡介: 基因演算法則的基本理論是由 Holland 於 1975 年首先提倡，是基於自然選擇過程的一種最佳化搜尋機構。 基因演算法則的三個主要運算子為複製 (reproduction)、交配 (crossover)、以及突變 (mutation)。 基因演算法是模仿兩性生殖的演化機制，使用交配、突變等機制，不斷改進群體適應的一種演算法。此方法廣泛被用在各個人工智慧領域，尤其是在最佳化問題上，遺傳演算法的表現往往相當優異。 4.Firefly Algorithm:此功能是螢火蟲演算法, 是一種啟發式算法，靈感來自於螢火蟲閃爍的行為。螢火蟲的閃光，其主要目的是作為一個信號系統，以吸引其他的螢火蟲，其假設為: 螢火蟲不分性別，這樣一個螢火蟲將會吸引到所有其他的螢火蟲 吸引力與它們的亮度成正比，對於任何兩個螢火蟲，不那麼明亮的螢火蟲被吸引，因此移動到更亮的一個，然而，亮度又隨著其距離的增加而減少 如果沒有比一個給定的螢火蟲更亮的螢火蟲，它會隨機移動 亮度應與目標函數聯繫起來。螢火蟲算法是以自然為靈感的啟發式優化算法 程式範例: using System; namespace FireflyAlgorithm { class FireflyProgram { static void Main(string[] args) { Console.WriteLine(\"Begin firefly demo\"); // Code here Console.WriteLine(\"End firefly demo\"); Console.ReadLine(); } static void ShowVector(double[] v, int dec, bool nl) { for (int i = 0; i < v.Length; ++i) Console.Write(v[i].ToString(\"F\" + dec) + \" \"); if (nl == true) Console.WriteLine(\"\"); } static double[] Solve(int numFireflies, int dim, int seed, int maxEpochs) { . . } static double Distance(double[] posA, double[] posB) { . . } static double Michalewicz(double[] xValues) { . . } static double Error(double[] xValues) { . . } } // Program public class Firefly : IComparable { // Defined here } } 5.Differential Evolution:此功能是差異進化演算法(微分進化演算法), 6.Adavance:這裡可以調整生成動態圖的細節 7.Time spent:計算生成動態圖的時間 以下是使用的概況: 在路徑中的白框內已經透過函數式功能產生了八個座標點,並透過Local Generate功能產生了三種動態圖(Genetic Algorithm, Firefly Algorithm, Differential Evolution),動態圖的樣子如下: Genetic Algorithm(四連桿): Firefly Algorithm(四連桿): Differential Evolution(四連桿): Genetic Algorithm(八連桿): Firefly Algorithm(八連桿): 無法產生,程式會跳掉 Differential Evolution(八連桿): 輸入一樣的數值,如用函數式f(x)=kx+c , 生k=2 , c=1 , x start from=1 , difference=0.5 ,end=5 ,生成的動態圖都有可能不一樣,好像是亂數決定的感覺,而產生的動態圖似乎還不太穩定,有時會出現感件全部不見,隔幾秒後才會出現,然後又消失,還有基因演算法和螢火蟲演算法用的時間會比較久,目前快的還是差異進化演算法","tags":"Course","url":"./2017springCD-Week7.html"},{"title":"2017CD第六週","text":"0.9dev(Pyslvs 0.9-beta.2)版本的問題: 機構區的部分: 接點的滑塊及滑槽功能還不能用,用了程式會直接跳 分析區的部分: Result部分的Chart(圖表化)和Merge(合併)這兩個功能用了程式會直接跳 產生的動態圖不穩定,只會有時候連桿和移動路徑會有突然的長時間空白,動態圖只會出現一下子 Path部分的兩個上下箭頭還是不能用,用了程式會直接跳 Process功能也未完成","tags":"Course","url":"./2017springCD-Week6.html"},{"title":"2017CD第五週","text":"簡介及介面介紹2: 此版本為更新版Pyslvs 0.9-beta.2,新增了一些功能,和修改了部分介面,如下: 檔案區的功能已全開放 1.開啟新的工作簿 2.讀取工作簿: 現在可以做存檔的動作 3.開啟範例: 新增三個範例檔案(1.曲柄搖桿機構) (2.單一組Jansen Linkage)(3.兩組Jansen Linkage) 4.導入(目前可以從四種來源導入檔案): (1)Pyslvs本身(特徵)(2)PMKS伺服器(3)範例(4)已儲存的檔案 5.送出和儲存: 可以搭配git倉儲,儲存時可以決定存放的分支 6.儲存到新的分支 也是搭配git倉儲,可儲存到另外的分支 7.另存為 8.儲藏 需搭配git指令,可以把進行到某種程度的工作先儲存到另一個分支,之後可在繼續進行 9.導出為: (1)Pyslvs特徵(2)圖片檔(如png , jpg , bmp等......)(3)PMKS網路 10.全螢幕 11.離開 輸入區: 這裡新增了調整旋轉速度的功能,可輸入任意的轉速,也可以逆時針旋轉 Path(路徑區)這裡新增了複製路徑的功能,在此記錄 左邊的分析區: 綠色方框中的內容: 為一種新的連桿計算方式,此功能目前還未完成,還在開發中 1.Reload from workbook:按下此按鈕可以把繪製的連桿機構資料傳到這裡來 2.Mainly for joint:此方框中會顯示該機構接點的顏色和座標軸 3.Mainly for link:此方框中會顯示該機構連桿的名稱和旋轉軸 4.Number of links:該機構的連桿數會顯示在這裡 5.Number of joints:該機構的接點數會顯示在這裡 6.Degree of freedom:調整自由度(不能用) 7.Number of combine:計算此連桿 8.Type combine:(不能用) 紅色方框中的內容: 維度分析: 此區的功能基本上和beta.1版本相同,有做了些修改: 1.路徑複製:可以把Input功能裡記錄的路徑位置複製貼上到Synthesis的Dimensional(維度分析)裡面,過程如下: Pyslvs 0.9-beta.2 test Copy path from 40423248 on Vimeo . 中間的轉換過程因為太久,所以中斷 2.Firefly Algorithm(八連桿)動態圖可以正常生成,程式不會跳掉 3.轉換動態圖的運算時間有稍微加快 版本控制區: Pyslvs 0.9-beta.2的版本控管獨立為個別的功能區","tags":"Course","url":"./2017springCD-Week5.html"},{"title":"2017CD第四週","text":"0.9dev版本的問題: 1.動作執行太快時程式會直接跳掉: 譬如說返回上一個動作的指令(CTRL+Z)按的太快的時候,如下: 2.不能作搖擺運動: 在影片1:22~1:26時會脫離,如影片所示: Pyslvs 0.9-beta.1 test Robert Mechaniam from 40423248 on Vimeo . 3.多加一個受力桿件,機構會不能作動,如影片所示: Pyslvs 0.9-beta.1 test problem Force rod from 40423248 on Vimeo . 4.合成功能無法使用,試著隨機導入點座標,但只要一計算程式會直接跳掉,如下:","tags":"Course","url":"./2017springCD-Week4.html"},{"title":"2017CD第三週","text":"其他試作範例: 1.羅伯特機構(Robert Mechaniam): 當(point0+point1)=(point1+point2)=(point2+point3)=(point3+point4),以及(point0+point2)=(point1+point3)=(point2+point4)時,point2可以做出近似於直線運動的路徑,而增加長度的比值時,會有更準確的直線運動 Pyslvs 0.9-beta.1 test Robert Mechaniam from 40423248 on Vimeo . 2.牽桿機構(Drag-link Mechanism): 此機構的最短桿為固定桿(point0+point3),曲柄(point0+point2),(point3+point4)可以做整圈的旋轉 Pyslvs 0.9-beta.1 test Drag-link Mechanism from 40423248 on Vimeo . 3.平行四連桿機構(Parallel crank four-bar linkage) 此機構的固定桿(point0+point3)與連接桿(point1+point2)一樣長,而兩個曲柄(point0+point1),(point2+point3)也一樣長,可以做旋轉運動 Pyslvs 0.9-beta.1 test Parallel crank four-bar linkage from 40423248 on Vimeo . 4.雙搖桿機構Double rocker mechanism 當兩根搖桿(point0+point2),(point1+point3)對固定桿(point0+point3)做往復搖擺運動,就會形成此機構 Pyslvs 0.9-beta.1 test Double rocker mechanism from 40423248 on Vimeo . 5.","tags":"Course","url":"./2017springCD-Week3.html"},{"title":"Pyslvs-user-manual-2","text":"使用說明: 這邊來說明Pyslvs基本的使用方式,先從基本的曲柄搖桿四連桿機構開始: 一開始可以先想好四連桿的長度,繪製時再做調整, 如:固定桿L1= 100 ,曲柄L2= 40, 連結桿L3= 70 , 搖桿L4= 80, 1.現在先來放點的位置,不用放的很準確,放點的指令快捷鍵為ALT+P 大約如下: 再來是調整位置和定尺寸,要調整某個點時在該點上以左鍵點兩下 如下圖: 點兩下會出現此視窗: 裡面的選項: 點的名稱:現在所選的點 點的顏色:可以更改顏色,做為區別 點的座標:定位用,可在X軸和Y軸輸入任意值 點的類型:可以是銷,滑塊(尚未開放),滑槽(尚未開放) 點和滑塊的角度:(尚未開放) 對應關係: 調整連桿間的連結關係,可以把三,四個桿件合併成一個桿件 2.做連桿: 點選一個點,再點選另外一個點(要按著CTRL),接著再按下L,就會形成一根連桿 如下圖: 接著把其他的連桿也都接起來,就如下圖: 再來是調整點的位置,調整完後,如下圖: 這邊還要做固定點,要固定某一點時,在該點上點右鍵,點選Fixed 固定後如下圖: 另一個點也是: 接著來到輸入(input)的部分: 完成後大致是這樣: Pyslvs 0.9-beta.1 test1 from 40423248 on Vimeo .","tags":"Course","url":"./2017springCD-Week2.html"},{"title":"Pyslvs-user-manual-1","text":"簡介及介面介紹: Pyslvs基本是由Python和slovespace所開發出來的運動模擬軟體 可以在此軟體中用點和直線的連結來做基本的連桿運動分析及位置紀錄 此版本為0.9dev(Pyslvs 0.9-beta.1),目前處於開發中的階段,有部分功能尚未開放,現在做的是基本測試 以下為0.9dev版本的介面說明: 這裡是一開始的介面 左上角的功能有(藍色方框處由左看來): 1.檔案 2.編輯 3.機構 4.選項 5.幫助 檔案中的內容: 1.開啟新的工作簿(尚未開放) 2.讀取工作簿(尚未開放) 3.開啟範例(尚未開放) 4.導入(PMKS) 5.儲存為(尚未開放) 6.另存為(尚未開放) 7.導入 8.全螢幕 9.離開 編輯中的內容: 1.復原(取消) 2.重作(再加入) 3.批量移動(尚未開放) 機構中的內容: 1.新的點(建立一個點,ALT+P) 2.新的連桿(建立一根連桿,ALT+L) 3.編輯此點(點的細節) 4.編輯此連桿(連桿的細節) 5.刪除此點 6.刪除此連桿 選項中的內容: 1.顯示GUI控制台 2.放大和縮小 3.顯示點標記 4.顯示點的維度(X.Y座標) 5.顯示路徑資料 6.顯示固定路徑樣式 7.Python腳本 8.性質 幫助中的內容: 1.前往Pyslvs.com 2.前往倉儲 3.前往MDE.tw 4.關於Pyslvs 5.關於Qt 下方的功能有: 1.縮放比例:用滑鼠按住藍色的長條體並左右拖曳 2.縮放和定位:按下此按鈕畫面就會回到正中間,縮放比例會變成適合此機構的比例 3.鎖點和解鎖:按下此按鈕畫面外圍會出現紫色方框,此時可以用滑鼠來直接來拖曳點的位置,不用輸入座標 4.錯誤提醒:當連桿在運動時出現死點旁邊就會出先警示標誌,如下圖: 左側邊的部分(藍框部分-1): 機構(包含點和連桿): 這邊可以看到點的細節,還有連桿的細節,以及點和連桿之間配合的關係 如下圖所示: 相機(綠框)與筆記本(藍框) 相機(綠框):繪製好一個機構時,點一下相機圖案可以直接複製截圖,可以貼到其他地方作保留 如下圖所示: 筆記本(藍框):可以在此輸入此機構的作者名字及對於此機構的描述 如下圖所示: 左側邊的部分(藍框部分-2): 輸入(點和連桿的配合):在這裡決定固定桿和驅動桿,並且做導入變數做運動模擬, 還有記錄運動軌跡的功能 條件順序: 藍色框:所有的點(活動及固定的) 綠色框:決定固定桿 棕色桿:決定驅動桿 變數(紫色框):上面的條件順序決定好後導入這裡,可以做順時針或逆時針的旋轉(自動或手動), 也可以捨棄此變數條件(垃圾桶圖示) 記錄區(棕色框):可以把模擬過的路徑資料記錄在這裡 左側邊的部分(藍框部分-3): 合成: 上圖紅框部分:數量和種類分析(尚未開放) 上圖綠框部分:維度分析(不知為何一使用程式就跳掉),(介面如下) 左側邊的部分(藍框部分-4): 歷史(歷程): 左側邊的部分(藍框部分-5): 設定: 1.線寬:可調整連桿的寬度 2.字型:可調整字體的大小 3.路徑寬度:可調整移動路徑的寬度 4.比例因子: 5.控制台:在GUI控制台裡面顯示運動中的錯誤資料,如下圖: 6.歷史:可調整取消和恢復的次數上下限,如下圖:","tags":"Course","url":"./2017springCD-Week1.html"}]};