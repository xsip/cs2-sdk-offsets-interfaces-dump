#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "rendersystemdx11_RsStencilStateDesc_t.hpp"

class rendersystemdx11_RsDepthStencilStateDesc_t {
    char __vftable_pad[1];
    rendersystemdx11_RsComparison_t m_depthFunc;
    rendersystemdx11_RsStencilStateDesc_t m_stencilState;
};
