# Scheduler - 拡張版

このプロジェクトは、学校の探究活動で作成されたオリジナルのSchedulerリポジトリを改良したものです。Google Apps Script（GAS）との連携、Pythonを使用した光学文字認識（OCR）、およびウェブアプリケーション用のCSVデータ管理など、いくつかの高度な機能を統合しています。

## 機能

- **Google Drive連携**: Google Apps Script（GAS）を利用してGoogle Drive上のファイルにアクセスし、管理します。
- **OCR処理**: PythonのOCRライブラリを使用して画像からテキストを抽出し、構造化されたデータに変換します。
- **CSV管理**: OCRで処理されたテキストをCSV形式に自動変換し、それをウェブアプリケーションで表示します。

## セットアップ手順

### 前提条件

- Google DriveにアクセスできるGoogleアカウント
- Python 3.x
- 必要なPythonライブラリ（以下にリスト）

### インストール

1. **リポジトリのクローン**

   ```bash
   git clone https://github.com/tetracontinental/scheduler.git
   cd scheduler
   ```

2. **Google Apps Script（GAS）の設定**
   
   - Google Apps Scriptで新しいプロジェクトを作成し、提供されたGASスクリプトをコピーします。
   - Google Driveにアクセスするための必要な権限を付与します。
   - 必要に応じて、GASをウェブアプリとしてデプロイするか、実行します。

3. **Pythonのセットアップ**

   - 必要なPythonパッケージをインストールします:

     ```bash
     pip install -r requirements.txt
     ```

   - Google Driveからファイルを処理するためにOCRスクリプトを実行します:

     ```bash
     python ocr_processor.py
     ```

4. **ウェブアプリケーションのセットアップ**

   - ウェブアプリケーションがOCRスクリプトで生成されたCSVファイルを読み込むように設定します。
   - アプリケーションの要件に応じて、データを表示します。

## 使い方

- Google Driveにファイルをアップロードします。
- GASスクリプトを使用してこれらのファイルの取得と処理を自動化します。
- Pythonスクリプトを実行してOCRを行い、CSVファイルを生成します。
- ウェブアプリケーションで結果を表示し、分析します。

## コントリビューション

プロジェクトのさらなる改善への貢献を歓迎します。リポジトリをフォークし、変更点をプルリクエストとして提出してください。

## ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細については、`LICENSE`ファイルをご覧ください。
