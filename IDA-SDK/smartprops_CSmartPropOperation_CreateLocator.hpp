#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropOperation_CreateLocator {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    CUtlString m_LocatorName;
    CSmartPropAttributeVector m_vOffset;
    CSmartPropAttributeFloat m_flDisplayScale;
    CSmartPropAttributeBool m_bConfigurable;
    CSmartPropAttributeBool m_bAllowTranslation;
    CSmartPropAttributeBool m_bAllowRotation;
    CSmartPropAttributeBool m_bAllowScale;
};
