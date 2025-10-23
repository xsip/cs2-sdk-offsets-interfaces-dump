#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimInputDamping.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CDampedValueUpdateItem {
    animgraphlib_CAnimInputDamping m_damping;
    char pad_105[0x8];
    animgraphlib_CAnimParamHandle m_hParamIn;
    animgraphlib_CAnimParamHandle m_hParamOut;
    char end_pad_106[0x4];
};
