#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropRoot {
    int32_t m_nContentVersion;
    char pad_2571[0x4];
    CSmartPropAttributeInt m_nMaxDepth;
    char m_Variables[0x18];
    char m_Choices[0x18];
    char m_Children[0x18];
    char m_Modifiers[0x18];
    char m_hPulseGraph[0x8];
    char end_pad_2572[0x20];
};
