#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseNodeDynamicOutflows_t.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"

class client_CPulseCell_PlaySequence {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    CUtlString m_SequenceName;
    pulse_runtime_lib_PulseNodeDynamicOutflows_t m_PulseAnimEvents;
    pulse_runtime_lib_CPulse_ResumePoint m_OnFinished;
    pulse_runtime_lib_CPulse_ResumePoint m_OnCanceled;
};
