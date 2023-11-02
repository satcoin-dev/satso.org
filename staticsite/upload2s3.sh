aws s3 cp index.html s3://satso/
aws s3 cp guide.html s3://satso/
aws s3 cp main.css s3://satso/assets/css/
aws s3 cp main.js s3://satso/assets/js/
aws s3 cp images s3://satso/images --recursive
aws s3 cp images s3://satso/images --recursive --exclude * --include *.png
aws s3 cp . s3://satso/  --recursive --exclude * --include *.csv --include *.png
aws s3 sync . s3://satso/ --exclude * --include *.xml