#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class pulse_runtime_lib_CPulseRuntimeMethodArg {
    CKV3MemberNameWithStorage m_Name;
    CUtlString m_Description;
    CPulseValueFullType m_Type;
    char end_pad_532[0x28];
};
