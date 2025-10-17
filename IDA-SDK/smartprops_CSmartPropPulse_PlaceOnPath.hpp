#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseSelectorOutflowList_t.hpp"

class smartprops_CSmartPropPulse_PlaceOnPath {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    pulse_runtime_lib_PulseSelectorOutflowList_t m_OutflowList;
    CUtlString m_PathName;
};
