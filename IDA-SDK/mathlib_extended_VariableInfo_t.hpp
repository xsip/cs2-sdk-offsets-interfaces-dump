#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "mathlib_extended_FuseVariableIndex_t.hpp"

class mathlib_extended_VariableInfo_t {
    CUtlString m_name;
    CUtlStringToken m_nameToken;
    mathlib_extended_FuseVariableIndex_t m_nIndex;
    uint8_t m_nNumComponents;
    mathlib_extended_FuseVariableType_t m_eVarType;
    mathlib_extended_FuseVariableAccess_t m_eAccess;
    char end_pad_2599[0x7];
};
