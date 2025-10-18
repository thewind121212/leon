import protobuf from "protobufjs";
import path from "path";
import { GenerateFile } from "leon/umbrella/genType";


const protoDir = path.resolve(process.cwd(), "profile");
const protoPath = path.join(protoDir, "profile.proto");


//Todo dynamic
const packageName = "profile";


// Get the package
const root = await protobuf.load(protoPath);
const pkg = root.lookup(packageName) as protobuf.Namespace;

export const optionsField = "proto3_optional";
export const typeMap: Record<string, string> = {
  string: "string",
  bool: "boolean",
  int32: "number",
  int64: "number",
  uint32: "number",
  uint64: "number",
  sint32: "number",
  sint64: "number",
  fixed32: "number",
  fixed64: "number",
  sfixed32: "number",
  sfixed64: "number",
  float: "number",
  double: "number",
  bytes: "Uint8Array",
};

GenerateFile(pkg, packageName, protoDir);




