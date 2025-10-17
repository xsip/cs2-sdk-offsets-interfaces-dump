#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropFilter_MaterialAttributes {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    char m_AllowedMaterialAttributes[0x18];
    char m_DisallowedMaterialAttributes[0x18];
};
