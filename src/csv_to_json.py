import csv
import json
csv_file = ""
with open(csv_file) as f:
    reader = csv.DictReader(f)
    rows = list(reader)

json_data = json.dumps(rows)

with open("data.json", "w") as f:
    f.write(json_data)
    f.close()