#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"

class pulse_runtime_lib_CPulseCell_Timeline {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    char m_TimelineEvents[0x18];
    bool m_bWaitForChildOutflows;
    char pad_515[0x7];
    pulse_runtime_lib_CPulse_ResumePoint m_OnFinished;
    pulse_runtime_lib_CPulse_ResumePoint m_OnCanceled;
};
