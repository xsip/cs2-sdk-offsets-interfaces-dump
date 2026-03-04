#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CParamSpanUpdater.hpp"

class animgraphlib_CEditableMotionGraph {
    void **__vftable_0;
    void **__vftable_1;
    animgraphlib_CParamSpanUpdater m_paramSpans;
    char m_tags[0x18];
    char m_pRootNode[0x8];
    int32_t m_nParameterCount;
    int32_t m_nConfigStartIndex;
    int32_t m_nConfigCount;
    bool m_bLoop;
    char end_pad_114[0x3];
};
