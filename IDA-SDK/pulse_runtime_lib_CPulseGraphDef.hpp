#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class pulse_runtime_lib_CPulseGraphDef {
    char vTable520[0x8];
    PulseSymbol_t m_DomainIdentifier;
    CPulseValueFullType m_DomainSubType;
    PulseSymbol_t m_ParentMapName;
    PulseSymbol_t m_ParentXmlName;
    char m_Chunks[0x18];
    char m_Cells[0x18];
    char m_Vars[0x18];
    char m_PublicOutputs[0x18];
    char m_InvokeBindings[0x18];
    char m_CallInfos[0x18];
    char m_Constants[0x18];
    char m_DomainValues[0x18];
    char m_BlackboardReferences[0x18];
    char m_OutputConnections[0x18];
    char end_pad_521[0x58];
};
