#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "mathlib_extended_FuseFunctionIndex_t.hpp"

class mathlib_extended_FunctionInfo_t {
    void **__vftable_0;
    CUtlString m_name;
    CUtlStringToken m_nameToken;
    int32_t m_nParamCount;
    mathlib_extended_FuseFunctionIndex_t m_nIndex;
    bool m_bIsPure;
    char end_pad_2560[0x5];
};
