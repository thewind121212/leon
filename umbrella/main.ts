import protobuf from "protobufjs";
import path from "path";
import { GenerateFileTypeScript, GenerateFileGolang } from "leon/umbrella/genType";


const protoDir = path.resolve(process.cwd(), "profile");
const protoPath = path.join(protoDir, "profile.proto");


//Todo dynamic
const packageName = "profile";


// Get the package
const root = await protobuf.load(protoPath);
const pkg = root.lookup(packageName) as protobuf.Namespace;

export const OptionsField = "proto3_optional";
export const TypeMapJavaScript: Record<string, string> = {
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

export const TypeMapGolang: Record<string, string> = {
  string: "string",
  bool: "bool",
  int32: "int32",
  int64: "int64",
  uint32: "uint32",
  uint64: "uint64",
  sint32: "int32",
  sint64: "int64",
  fixed32: "uint32",
  fixed64: "uint64",
  sfixed32: "int32",
  sfixed64: "int64",
  float: "float32",
  double: "float64",
  bytes: "[]byte",
};

GenerateFileTypeScript(pkg, packageName, protoDir);
GenerateFileGolang(pkg, packageName, protoDir);




