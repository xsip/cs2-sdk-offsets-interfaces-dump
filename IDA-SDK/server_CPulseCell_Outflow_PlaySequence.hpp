#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"

class server_CPulseCell_Outflow_PlaySequence {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    pulse_runtime_lib_CPulse_ResumePoint m_OnFinished;
    pulse_runtime_lib_CPulse_ResumePoint m_OnCanceled;
    char m_Triggers[0x18];
    CUtlString m_ParamSequenceName;
};
