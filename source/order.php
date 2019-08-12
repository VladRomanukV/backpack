<?php
        
             //собираем данные о клиенете в один массив для отправки           
            $data = [
                'tel' => $_REQUEST['tel'],
                'client' => $_REQUEST['client'],
                'ip' => $_SERVER['REMOTE_ADDR']
            ];
            
            $subid = '';
            for ($i=1; $i<=5; $i++) {
                if(isset($_REQUEST["subid$i"]) && trim($_REQUEST["subid$i"]) != '') {
                    $subid .= $_REQUEST["subid$i"].':';
                }
            }
            $subid = rtrim($subid, ':');
            if ($subid != '') {
                $data['subid'] = $subid;
            }
            
            $ch = curl_init();
            $url = 'https://api.monsterleads.pro/method/order.add?api_key=86d7715d891f5105e2b45dd458d3a91e&format=json&code=0smkcwv';
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
            $res= curl_exec($ch);
            curl_close($ch);
            $answer = json_decode($res, true);
            
            if($answer['status'] == 'ok'){
                // лид успешно добавлен
            Header('Location: success.html'); die();
            }else{
                print_r ($answer);
               die();
            }