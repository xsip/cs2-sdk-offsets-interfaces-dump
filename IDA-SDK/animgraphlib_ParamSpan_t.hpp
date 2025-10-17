#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_ParamSpan_t {
    char m_samples[0x18];
    animgraphlib_CAnimParamHandle m_hParam;
    animgraphlib_AnimParamType_t m_eParamType;
    char pad_274[0x1];
    float32 m_flStartCycle;
    float32 m_flEndCycle;
    char end_pad_275[0x4];
};
