#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimParamHandle.hpp"
#include "modellib_AnimScriptHandle.hpp"

class animgraphlib_CExpressionActionUpdater {
    char pad_26[0x18];
    animgraphlib_CAnimParamHandle m_hParam;
    animgraphlib_AnimParamType_t m_eParamType;
    char pad_119[0x1];
    modellib_AnimScriptHandle m_hScript;
};
