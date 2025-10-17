# xsip's CS2 Dump ( Interface Offsets, Schema Offsets, Cheat Engine Table, and SDK)

## This dump contains a fully working SDK, SDK to use with IDA ( Work in progress!! ), dump of all SchemaClass Offsets and Interface offsets


# SDK Class Example
![Example SDK Output](https://raw.githubusercontent.com/xsip/cs2-sdk-offsets-interfaces-dump/refs/heads/main/example-sdk-file.png "Example SDK Output")
# SDK Schema Offsets Example
![Example Offset Output](https://raw.githubusercontent.com/xsip/cs2-sdk-offsets-interfaces-dump/refs/heads/main/example-offset-file.png "Example Offst Output")
# Interface Dump Example
![Example Interfaces Output](https://raw.githubusercontent.com/xsip/cs2-sdk-offsets-interfaces-dump/refs/heads/main/example-interfaces-file.png "Example Interfaces Output")
# Cheat Engine Example
![Example Cheat Engine](https://raw.githubusercontent.com/xsip/cs2-sdk-offsets-interfaces-dump/refs/heads/main/example-cheat-engine.png "Example Cheat Engine Output")

# IDA SDK Example
## Open IDA, load client.dll, click on "File->Load File->Parse C Header file" and load "IDA-SDK/CLIENT_DLL/all_classes.hpp". After that you can use the generated classes in IDA. This c++ classes as merged! No inheritance, since IDA can't handle it. Tested on IDA 7.0, IDA 9.0 and IDA 9.2

