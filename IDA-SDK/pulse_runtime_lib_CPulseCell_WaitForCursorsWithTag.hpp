#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"

class pulse_runtime_lib_CPulseCell_WaitForCursorsWithTag {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    int32_t m_nCursorsAllowedToWait;
    char pad_504[0x4];
    pulse_runtime_lib_CPulse_ResumePoint m_WaitComplete;
    bool m_bTagSelfWhenComplete;
    char pad_517[0x3];
    pulse_runtime_lib_PulseCursorCancelPriority_t m_nDesiredKillPriority;
};
