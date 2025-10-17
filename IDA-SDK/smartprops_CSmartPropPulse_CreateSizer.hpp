#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"

class smartprops_CSmartPropPulse_CreateSizer {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    CUtlString m_Name;
    bool m_bHACK_ProvideResultMinX;
    bool m_bHACK_ProvideResultMaxX;
    bool m_bHACK_ProvideResultMinY;
    bool m_bHACK_ProvideResultMaxY;
    bool m_bHACK_ProvideResultMinZ;
    bool m_bHACK_ProvideResultMaxZ;
    char end_pad_2569[0x2];
};
