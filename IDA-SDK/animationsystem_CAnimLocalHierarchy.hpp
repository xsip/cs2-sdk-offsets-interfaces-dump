#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CAnimLocalHierarchy {
    CBufferString m_sBone;
    CBufferString m_sNewParent;
    int32_t m_nStartFrame;
    int32_t m_nPeakFrame;
    int32_t m_nTailFrame;
    int32_t m_nEndFrame;
};
