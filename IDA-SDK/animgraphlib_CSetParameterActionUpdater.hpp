#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CSetParameterActionUpdater {
    char pad_26[0x18];
    animgraphlib_CAnimParamHandle m_hParam;
    CAnimVariant m_value;
    char end_pad_214[0x5];
};
