-- [[ Configure and install plugins ]]

require('lazy').setup({
  'tpope/vim-sleuth',

  require 'kickstart/plugins/gitsigns',

  require 'kickstart/plugins/which-key',

  require 'kickstart/plugins/telescope',

  require 'kickstart/plugins/lspconfig',

  require 'kickstart/plugins/conform',

  require 'kickstart/plugins/cmp',

  require 'kickstart/plugins/todo-comments',

  require 'kickstart/plugins/mini',

  require 'kickstart/plugins/treesitter',

  require 'kickstart.plugins.autopairs',

  require 'custom.plugins.gruvbox',

}, {
  ui = {
    icons = vim.g.have_nerd_font and {} or {
      cmd = ' ',
      config = ' ',
      event = ' ',
      ft = ' ',
      init = ' ',
      keys = ' ',
      plugin = ' ',
      runtime = ' ',
      require = ' ',
      source = ' ',
      start = ' ',
      task = ' ',
      lazy = '  ',
    },
  },
})

-- vim: ts=2 sts=2 sw=2 et
