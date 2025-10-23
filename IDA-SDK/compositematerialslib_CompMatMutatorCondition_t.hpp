#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class compositematerialslib_CompMatMutatorCondition_t {
    compositematerialslib_CompMatPropertyMutatorConditionType_t m_nMutatorCondition;
    char pad_2602[0x4];
    CUtlString m_strMutatorConditionContainerName;
    CUtlString m_strMutatorConditionContainerVarName;
    CUtlString m_strMutatorConditionContainerVarValue;
    bool m_bPassWhenTrue;
    char end_pad_2603[0x7];
};
