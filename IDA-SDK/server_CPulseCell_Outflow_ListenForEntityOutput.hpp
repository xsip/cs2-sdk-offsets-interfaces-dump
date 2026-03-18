#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_SignatureOutflow_Resume.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"

class server_CPulseCell_Outflow_ListenForEntityOutput {
    void **__vftable_0;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_512[0x3c];
    pulse_runtime_lib_SignatureOutflow_Resume m_OnFired;
    pulse_runtime_lib_CPulse_ResumePoint m_OnCanceled;
    CGlobalSymbol m_strEntityOutput;
    CUtlString m_strEntityOutputParam;
    bool m_bListenUntilCanceled;
    char end_pad_4088[0x7];
};
