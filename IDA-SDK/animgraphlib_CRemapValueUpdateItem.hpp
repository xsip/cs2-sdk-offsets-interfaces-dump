#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CRemapValueUpdateItem {
    animgraphlib_CAnimParamHandle m_hParamIn;
    animgraphlib_CAnimParamHandle m_hParamOut;
    float32 m_flMinInputValue;
    float32 m_flMaxInputValue;
    float32 m_flMinOutputValue;
    float32 m_flMaxOutputValue;
};
