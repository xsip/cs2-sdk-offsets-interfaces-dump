#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseGraphInstanceID_t.hpp"

class pulse_runtime_lib_CPulseGraphExecutionHistory {
    pulse_runtime_lib_PulseGraphInstanceID_t m_nInstanceID;
    char pad_531[0x4];
    CUtlString m_strFileName;
    char m_vecHistory[0x18];
    char m_mapCellDesc[0x28];
    char m_mapCursorDesc[0x28];
};
