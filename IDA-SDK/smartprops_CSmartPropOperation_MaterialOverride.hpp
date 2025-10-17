#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropOperation_MaterialOverride {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    CSmartPropAttributeBool m_bClearCurrentOverrides;
    char m_MaterialReplacements[0x18];
};
